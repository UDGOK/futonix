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

  const debouncedFetch = useCallback(
    (input: string) => {
      const fetchSuggestions = async (input: string) => {
        if (!input.trim()) {
          setSuggestions([]);
          return;
        }

        try {
          setIsLoading(true);
          setError(null);
          console.log('Fetching suggestions for:', input);
          const response = await fetch(`/api/geocode?q=${encodeURIComponent(input)}&countrycodes=us`);

          if (!response.ok) {
            throw new Error('Failed to fetch address suggestions');
          }

          const data = await response.json();
          console.log('Received suggestions:', data);
          if (Array.isArray(data)) {
            setSuggestions(data);
          } else {
            console.error('Unexpected response format:', data);
            setSuggestions([]);
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to fetch suggestions');
          setSuggestions([]);
        } finally {
          setIsLoading(false);
        }
      };

      const debounced = debounce(fetchSuggestions, debounceMs);
      debounced(input);
    },
    [debounceMs, setSuggestions, setIsLoading, setError]
  );

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