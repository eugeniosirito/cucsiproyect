/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from 'react-router-dom';

import Home from './index';

const baseURL = 'https://books-training-rails.herokuapp.com/api/v1/users';
const server = setupServer(
  rest.post(baseURL, (req, res, ctx) =>
    res(
      // eslint-disable-next-line no-magic-numbers
      ctx.status(200),
      ctx.json({
        data: {
          first_name: 'Eugenio Pedro',
          last_name: 'siridcostassirito',
          email: 'siricosdstafsdfssirito@hotmail.com',
          password: 'siricostasirito123',
          password_confirmation: 'siricostasirito123',
          locale: 'es'
        }
      })
    )
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('signs up with valid fields', async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  userEvent.type(screen.getByLabelText('LogIn:nameInput'), 'Eugenio Pedro');
  userEvent.type(screen.getByLabelText('LogIn:surnameInput'), 'siridcostassirito');
  userEvent.type(screen.getByLabelText('LogIn:emailInput'), 'siricosdstafsdfssirito@hotmail.com');
  userEvent.type(screen.getByLabelText('LogIn:passwordInput'), 'siricostasirito123');
  userEvent.type(screen.getByLabelText('LogIn:confPasswordInput'), 'siricostasirito123');

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
  expect(await screen.findByText('Success!')).toBeInTheDocument();
});

test('it shows errors if the fields are empty', async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
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
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  screen.debug();
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
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  screen.debug();
  userEvent.type(screen.getByLabelText('LogIn:nameInput'), 'eugenipedroeugenio');
  userEvent.type(screen.getByLabelText('LogIn:surnameInput'), 'siricostasirito');
  userEvent.type(screen.getByLabelText('LogIn:emailInput'), '');
  userEvent.type(screen.getByLabelText('LogIn:passwordInput'), 'siricostasirito123');
  userEvent.type(screen.getByLabelText('LogIn:confPasswordInput'), 'siricostasirito123');

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
  expect(await screen.findByText('LogIn:emailError')).toBeInTheDocument();
});
