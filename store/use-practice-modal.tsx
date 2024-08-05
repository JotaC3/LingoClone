import {create } from 'zustand'

type PracticeModalstate = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const usePracticeModal = create<PracticeModalstate>((set) =>({
    isOpen: false, 
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));