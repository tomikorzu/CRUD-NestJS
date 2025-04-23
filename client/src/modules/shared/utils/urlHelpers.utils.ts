import { ReadonlyURLSearchParams } from "next/navigation";

export function getParam(
  searchParams: ReadonlyURLSearchParams,
  key: string
): string | string[] | null {
  const value = searchParams.get(key);
  if (value === null) return null;
  return value.includes(",") ? value.split(",") : value;
}

export function getAllParams(
  searchParams: ReadonlyURLSearchParams
): Record<string, string | string[]> {
  const result: Record<string, string | string[]> = {};
  searchParams.forEach((value, key) => {
    result[key] = value.includes(",") ? value.split(",") : value;
  });
  return result;
}

export function setParam(
  searchParams: ReadonlyURLSearchParams,
  key: string,
  value: string | string[] | null
): URLSearchParams {
  const newParams = new URLSearchParams(searchParams.toString());

  if (
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)
  ) {
    newParams.delete(key);
  } else {
    const serializedValue = Array.isArray(value) ? value.join(",") : value;
    newParams.set(key, serializedValue);
  }

  return newParams;
}

export function removeParam(
  searchParams: ReadonlyURLSearchParams,
  key: string
): URLSearchParams {
  const newParams = new URLSearchParams(searchParams.toString());
  newParams.delete(key);
  return newParams;
}

export function replaceParams(
  params: Record<string, string | string[] | null>
): URLSearchParams {
  const newParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (
      value === null ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return;
    }

    const serializedValue = Array.isArray(value) ? value.join(",") : value;
    newParams.set(key, serializedValue);
  });

  return newParams;
}
