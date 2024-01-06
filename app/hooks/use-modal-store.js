import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";

const modalTypes = [
  "createServer",
  "invite",
  "editServer",
  "members",
  "createChannel",
  "leaveServer",
  "deleteServer",
  "deleteChannel",
  "editChannel",
  "messageFile",
  "deleteMessage",
];

const initialState = {
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
};

export const useModal = create((set) => ({
  ...initialState,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
