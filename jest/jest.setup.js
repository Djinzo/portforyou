import '@testing-library/jest-dom'
jest.mock('next/image', () => ({
   __esModule: true,
   default: () => {
      return 'Next mocked image '
   },
}))
