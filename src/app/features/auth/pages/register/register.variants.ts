import { tv } from 'tailwind-variants';

export const main = tv({
  base: 'w-full min-h-screen flex flex-col md:flex-row bg-(--section-bg)',
});

export const presentationSection = tv({
  base: 'w-full md:w-1/3 md:min-h-screen hidden md:block bg-(--brand-main) p-8',
});

export const formSection = tv({
  base: 'w-full md:w-2/3 min-h-screen p-6 flex justify-center items-center flex-col gap-4',
});

export const formContainer = tv({
  base: 'w-full max-w-sm flex flex-col gap-3',
});

export const formInput = tv({
  base: [
    'w-full',
    'h-11',
    'px-3.5',
    'rounded-lg',
    'border-[1.5px]',
    'border-(--border-default)',
    'bg-(--white)',
    'outline-none',
    'transition-colors',
    'hover:border-(--border-hover)',
    'focus:border-(--brand-main)',
  ],
  variants: {
    withIcon: {
      true: 'pl-10',
      false: '',
    },
  },
});

export const formFields = tv({
  base: 'flex flex-col gap-3',
});

export const button = tv({
  base: 'w-full h-11 bg-(--brand-main) hover:bg-(--brand-hover)',
});

export const buttonSpan = tv({
  base: 'flex justify-center items-center',
});

export const comeBackButton = tv({
  base: [
    'w-13',
    'h-10',
    'p-0',
    'flex',
    'items-center',
    'justify-center',
    'rounded-lg',
    'border',
    'border-(--border-default)',
    'bg-(--card-bg)',
    'text-(--title-text)',
    'shadow-none',
    'hover:bg-(--section-bg)',
  ],
});

export const h1Text = tv({
  base: 'text-[22px] font-bold tracking-[-0.4px] text-(--text-primary)',
});

export const pText = tv({
  base: 'text-sm font-normal text-(--text-secondary) mb-6.5',
});

export const stepProgress = tv({
  base: ['flex-1', 'h-0.75', 'rounded-full', 'transition-colors', 'duration-220', 'ease-in-out'],

  variants: {
    active: {
      true: 'bg-(--brand-main)',
      false: 'bg-(--border-hover)',
    },
  },
});

export const legendText = tv({
  base: ['text-[11px]', 'font-bold', 'text-(--body-text)', 'tracking-[0.5px]', 'uppercase', 'mb-4'],
});

export const termsContainer = tv({
  base: 'flex flex-col gap-1',
});

export const termsRow = tv({
  base: 'flex items-center gap-2',
});

export const checkboxWrapper = tv({
  base: [
    'relative',
    'flex',
    'h-4.5',
    'w-4.5',
    'shrink-0',
    'cursor-pointer',
    'items-center',
    'justify-center',
  ],
});

export const termsCheckbox = tv({
  base: [
    'peer',
    'h-4.5',
    'w-4.5',
    'cursor-pointer',
    'appearance-none',
    'rounded-sm',
    'border',
    'border-(--border-hover)',
    'bg-(--card-bg)',
    'checked:border-(--brand-main)',
    'checked:bg-(--brand-main)',
  ],
});

export const checkboxIcon = tv({
  base: [
    'pi',
    'pi-check',
    'pointer-events-none',
    'absolute',
    'text-[9px]',
    'text-white',
    'opacity-0',
    'peer-checked:opacity-100',
  ],
});

export const termsText = tv({
  base: ['cursor-pointer', 'text-[12px]', 'font-normal', 'text-(--body-text)'],
});

export const termsLink = tv({
  base: ['font-semibold', 'text-(--brand-main)', 'hover:underline'],
});

export const errorText = tv({
  base: ['flex', 'items-center', 'gap-1', 'text-xs', 'text-(--error-text)'],
});

export const errorIcon = tv({
  base: 'pi pi-exclamation-circle text-[10px]',
});

export const headerPresentation = tv({
  base: 'flex flex-col gap-10',
});

export const h2TextPresentation = tv({
  base: 'text-sm font-normal leading-1.65 text-(--white-76)',
});
