import { useState, useEffect, useCallback } from 'react';
import { debounce } from './utils';

interface Suggestion {
  display_name: string;
  place_id: number;
}

export function useAddressAutocomplete(debounceMs: number = 300) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSuggestions = useCallback(async (input: string) => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`/api/geocode?q=${encodeURIComponent(input)}&countrycodes=us`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to fetch address suggestions');
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        setSuggestions(data);
      } else {
        throw new Error('Invalid response format from geocoding service');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch suggestions');
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedFetch = useCallback((input: string) => {
    const debouncedFn = debounce((value: string) => {
      fetchSuggestions(value);
    }, debounceMs);
    debouncedFn(input);
  }, [debounceMs, fetchSuggestions]);

  useEffect(() => {
    debouncedFetch(query);
  }, [query, debouncedFetch]);

  return {
    query,
    setQuery,
    suggestions,
    isLoading,
    error,
    setSuggestions,
  };
}