import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-surface hover:scale-[1.02]',
        secondary:
          'bg-secondary-container text-on-secondary-container hover:scale-[1.02]',
        outline:
          'bg-surface text-primary ring-1 ring-outline-variant/40 hover:bg-surface-container-low',
        ghost: 'text-primary hover:bg-surface-container-low',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 rounded-xl px-3',
        lg: 'h-12 rounded-3xl px-7',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? 'span' : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
