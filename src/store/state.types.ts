export interface RootState {
  navigation: NavigationState;
  loader: LoaderState;
  snackbar: SnackbarState;
  locale: LocaleState;
  auth: AuthState;
  // other slices of state
}

export interface NavigationState {
  pageTitle: string;
}

export interface LoaderState {
  isLoading: boolean;
  isSkeletonLoading: boolean;
}

export interface SnackbarState {
  showSnackbar: boolean;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

export interface LocaleState {
  lang: string;
}

export interface AuthState {
  userInfo: any | null;
}
