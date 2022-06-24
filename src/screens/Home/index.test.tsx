import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Home from './index';

const server = setupServer(
  rest.post('signup', (req, res, ctx) =>
    res(
      ctx.json({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        first_name: 'Eugenio Pedro'
      })
    )
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('signs up with valid fields', async () => {
  render(<Home />);

  screen.debug();
  userEvent.type(screen.getByLabelText('LogIn:nameInput'), 'Eugenio Pedro');
  userEvent.type(screen.getByLabelText('LogIn:surnameInput'), 'siricostassirito');
  userEvent.type(screen.getByLabelText('LogIn:emailInput'), 'siricostafsdfssirito@hotmail.com');
  userEvent.type(screen.getByLabelText('LogIn:passwordInput'), 'siricostasirito123');
  userEvent.type(screen.getByLabelText('LogIn:confPasswordInput'), 'siricostasirito123');

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
});

test('it shows errors if the fields are empty', async () => {
  render(<Home />);

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
  expect(await screen.findByText('LogIn:nameError'));
  expect(await screen.findByText('LogIn:surnameError'));
  expect(await screen.findByText('LogIn:emailError'));
  expect(await screen.findByText('LogIn:passwordError'));
  expect(await screen.findByText('LogIn:confPasswordError'));
});

test('cant submit with invalid inputs', async () => {
  render(<Home />);

  screen.debug();
  userEvent.type(screen.getByLabelText('LogIn:nameInput'), 'eugenipedroeugenio');
  userEvent.type(screen.getByLabelText('LogIn:surnameInput'), 'siricostasirito');
  userEvent.type(screen.getByLabelText('LogIn:emailInput'), 'asd');
  userEvent.type(screen.getByLabelText('LogIn:passwordInput'), 'siricostasirito123');
  userEvent.type(screen.getByLabelText('LogIn:confPasswordInput'), 'siricostasirito123');

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
  expect(await screen.findByText('Invalid input information'));
});

test('cant submit with an empty input', async () => {
  render(<Home />);

  screen.debug();
  userEvent.type(screen.getByLabelText('LogIn:nameInput'), 'eugenipedroeugenio');
  userEvent.type(screen.getByLabelText('LogIn:surnameInput'), 'siricostasirito');
  userEvent.type(screen.getByLabelText('LogIn:emailInput'), '');
  userEvent.type(screen.getByLabelText('LogIn:passwordInput'), 'siricostasirito123');
  userEvent.type(screen.getByLabelText('LogIn:confPasswordInput'), 'siricostasirito123');

  await waitFor(async () => userEvent.click(await screen.findByRole('button', { name: 'LogIn:signUp' })));
  expect(await screen.findByText('LogIn:emailError'));
});
