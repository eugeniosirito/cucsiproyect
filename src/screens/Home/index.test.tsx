/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Login from 'screens/Login';
import { PATH_NAMES } from 'constants/constantsPaths';

import Home from './index';

const baseURL = 'https://books-training-rails.herokuapp.com/api/v1/users';
const server = setupServer(
  rest.post(baseURL, (req, res, ctx) =>
    res(
      // eslint-disable-next-line no-magic-numbers
      ctx.status(200)
    )
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
const queryClient = new QueryClient();

test('signs up with valid fields', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[PATH_NAMES.signup]}>
        <Routes>
          <Route path={PATH_NAMES.signup} element={<Home />} />
          <Route path={PATH_NAMES.login} element={<Login />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
  userEvent.type(screen.getByLabelText('LogIn:nameInput'), 'Eugenio Pedro');
  userEvent.type(screen.getByLabelText('LogIn:surnameInput'), 'siridcostassirito');
  userEvent.type(screen.getByLabelText('LogIn:emailInput'), 'siricosdstafsdfssirito@hotmail.com');
  userEvent.type(screen.getByLabelText('LogIn:passwordInput'), 'siricostasirito123');
  userEvent.type(screen.getByLabelText('LogIn:confPasswordInput'), 'siricostasirito123');
  await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'LogIn:signUp' })));
  expect(screen.getByLabelText('LogIn:emailInput')).toBeInTheDocument();
  expect(screen.getByLabelText('LogIn:passwordInput')).toBeInTheDocument();
  expect(screen.queryByLabelText('LogIn:nameInput')).not.toBeInTheDocument();
  expect(screen.queryByLabelText('LogIn:surnameInput')).not.toBeInTheDocument();
  expect(screen.queryByLabelText('LogIn:confPasswordInput')).not.toBeInTheDocument();
});

test('it shows errors if the fields are empty', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[PATH_NAMES.signup]}>
        <Routes>
          <Route path={PATH_NAMES.signup} element={<Home />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
  expect(await screen.findByText('LogIn:nameError')).toBeInTheDocument();
  expect(await screen.findByText('LogIn:surnameError')).toBeInTheDocument();
  expect(await screen.findByText('LogIn:emailError')).toBeInTheDocument();
  expect(await screen.findByText('LogIn:passwordError')).toBeInTheDocument();
  expect(await screen.findByText('LogIn:confPasswordError')).toBeInTheDocument();
});

test('cant submit with invalid inputs', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[PATH_NAMES.signup]}>
        <Routes>
          <Route path={PATH_NAMES.signup} element={<Home />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
  userEvent.type(screen.getByLabelText('LogIn:nameInput'), 'eugenipedroeugenio');
  userEvent.type(screen.getByLabelText('LogIn:surnameInput'), 'siricostasirito');
  userEvent.type(screen.getByLabelText('LogIn:emailInput'), 'asd');
  userEvent.type(screen.getByLabelText('LogIn:passwordInput'), 'siricostasirito123');
  userEvent.type(screen.getByLabelText('LogIn:confPasswordInput'), 'siricostasirito123');

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
  expect(await screen.findByText('Invalid input information')).toBeInTheDocument();
});

test('cant submit with an empty input', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[PATH_NAMES.signup]}>
        <Routes>
          <Route path={PATH_NAMES.signup} element={<Home />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );

  userEvent.type(screen.getByLabelText('LogIn:nameInput'), 'eugenipedroeugenio');
  userEvent.type(screen.getByLabelText('LogIn:surnameInput'), 'siricostasirito');
  userEvent.type(screen.getByLabelText('LogIn:emailInput'), '');
  userEvent.type(screen.getByLabelText('LogIn:passwordInput'), 'siricostasirito123');
  userEvent.type(screen.getByLabelText('LogIn:confPasswordInput'), 'siricostasirito123');

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
  expect(await screen.findByText('LogIn:emailError')).toBeInTheDocument();
});
