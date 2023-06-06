export const getContentType = () => ({
  'Content-Type': 'application/json'
});

export const ErrorCatch = (error: any): string => {
  const { message } = error.response.data.message;

  if (message) {
    return typeof error?.response.data.message === 'object' ? message[0] : message;
  }

  return error.message;
};
