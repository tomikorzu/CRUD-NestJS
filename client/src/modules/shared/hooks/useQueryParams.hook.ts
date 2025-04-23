import { useRouter, useSearchParams } from "next/navigation";
import {
  getParam,
  getAllParams,
  setParam as setHelper,
  removeParam as removeHelper,
  replaceParams as replaceHelper,
} from "@/modules/shared/utils/urlHelpers.utils";

/**
 * A custom hook for managing query parameters in the URL.
 *
 * This hook provides utility functions to get, set, remove, and replace query parameters
 * in the URL using Next.js's `useRouter` and `useSearchParams` hooks.
 *
 * @returns An object containing the following methods:
 *
 * - `getParam(key: string): string | null`
 *   Retrieves the value of a specific query parameter by its key.
 *
 * - `getAllParams(): URLSearchParams`
 *   Retrieves all query parameters as a `URLSearchParams` object.
 *
 * - `setParam(key: string, value: string | string[] | null): void`
 *   Sets or updates the value of a specific query parameter. If `value` is `null`, the parameter is removed.
 *
 * - `removeParam(key: string): void`
 *   Removes a specific query parameter by its key.
 *
 * - `replaceParams(params: Record<string, string | string[] | null>): void`
 *   Replaces the current query parameters with the provided set of parameters.
 *
 * @example
 * ```typescript
 * const { getParam, setParam, removeParam, replaceParams } = useQueryParams();
 *
 * // Get a query parameter
 * const value = getParam('key');
 *
 * // Set a query parameter
 * setParam('key', 'value');
 *
 * // Remove a query parameter
 * removeParam('key');
 *
 * // Replace all query parameters
 * replaceParams({ key1: 'value1', key2: ['value2', 'value3'] });
 * ```
 */

export function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const get = (key: string) => getParam(searchParams, key);

  const getAll = () => getAllParams(searchParams);

  const set = (key: string, value: string | string[] | null) => {
    const newParams = setHelper(searchParams, key, value);
    router.replace(`?${newParams.toString()}`);
  };

  const remove = (key: string) => {
    const newParams = removeHelper(searchParams, key);
    router.replace(`?${newParams.toString()}`);
  };

  const replace = (params: Record<string, string | string[] | null>) => {
    const newParams = replaceHelper(params);
    router.replace(`?${newParams.toString()}`);
  };

  return {
    getParam: get,
    getAllParams: getAll,
    setParam: set,
    removeParam: remove,
    replaceParams: replace,
  };
}
