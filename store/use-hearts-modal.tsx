import {create } from 'zustand'

type HeartsModalstate = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const useHeartsModal = create<HeartsModalstate>((set) =>({
    isOpen: false, 
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));