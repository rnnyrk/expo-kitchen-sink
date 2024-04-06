import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Pressable } from 'react-native';
import { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from 'common/typography';

import { ToastContainer } from './styled';

type ToastContextProps = {
  show: (toast: ToastProps) => void;
  hide: () => void;
};

export const ToastContext = createContext<ToastContextProps>({
  show: () => {},
  hide: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}

function Toast({ message, onPress, variant = 'error' }: ToastProps) {
  const insets = useSafeAreaInsets();

  return (
    <ToastContainer
      variant={variant}
      insets={insets}
      entering={FadeInUp}
      exiting={FadeOutUp}
    >
      <Pressable onPress={onPress}>
        <Text
          color="white"
          fontFamily={400}
          size={16}
        >
          {message}
        </Text>
      </Pressable>
    </ToastContainer>
  );
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [currentToast, setCurrentToast] = useState<null | ToastProps>(null);
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentToast(null);
    }, 4000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentToast]);

  return (
    <ToastContext.Provider
      value={{
        show: (toast: ToastProps) => setCurrentToast(toast),
        hide: () => setCurrentToast(null),
      }}
    >
      {children}
      {currentToast && (
        <Toast
          {...currentToast}
          onPress={() => setCurrentToast(null)}
        />
      )}
    </ToastContext.Provider>
  );
};

type ToastProviderProps = {
  children: React.ReactNode;
};

export type ToastProps = {
  message: string;
  onPress?: () => void;
  variant?: 'success' | 'error';
};
