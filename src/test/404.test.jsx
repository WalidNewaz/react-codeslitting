import React from 'react';
import { expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import NotFound from '../404';

test('render the 404 page', async () => {
  const { getByText } = render(<NotFound />);
  const headerTxt = getByText(/404 - Not Found!/i);
  await expect.element(headerTxt).toBeInTheDocument()
});
