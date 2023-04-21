import { expect, test } from 'vitest'

test('should user can create a new transaction', () => {
  // fazer a chamada HTTP p/ criar uma nova transação
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
  // validação
})
