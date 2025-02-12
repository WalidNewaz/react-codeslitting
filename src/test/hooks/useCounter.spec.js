import { expect, test } from "vitest";
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../hooks/useCounter';

test('should initialize with the default value', () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
});

test('should increment the count', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test('should decrement the count', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(-1);
});

test('should reset the count', () => {
  const { result } = renderHook(() => useCounter(5));

  act(() => {
    result.current.increment();
    result.current.reset();
  });

  expect(result.current.count).toBe(5);
});