import { hideDialogGlobal, showDialogGlobal } from '../shared/dialog/GlobalDialog';

interface showDialogParams {
  content: React.ReactNode;
  onDismiss?: () => void;
}

export function showDialog({ content, onDismiss }: showDialogParams) {
  showDialogGlobal({ content, onDismiss });
}

export function hideDialog() {
  hideDialogGlobal();
}

