import { createModalContext } from './createModalContext';

const { ModalProvider, useModal } = createModalContext();

export const BlockUserModalProvider = ModalProvider;

export const useBlockUserModal = useModal;
