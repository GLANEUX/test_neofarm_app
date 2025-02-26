import { ReactNode } from 'react';

import { Alert, AlertDescription, AlertTitle, Box } from '@chakra-ui/react';
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Box padding="8" margin="auto">
      <Alert.Root status="error" borderRadius="md">
        <Alert.Indicator height="75px" width="75px" />
        <Box flex="1">
          <AlertTitle fontWeight="bold" fontSize="35px">
            An unexpected error has occurred.
          </AlertTitle>
          <AlertDescription
            padding="5"
            marginTop="3"
            fontSize="20px"
            lineHeight="1.4"
          >
            <br />
            {error.message}
          </AlertDescription>
        </Box>
      </Alert.Root>
    </Box>
  );
};

export const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};
