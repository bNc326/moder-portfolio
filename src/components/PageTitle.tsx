import * as React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import type { HTMLMotionProps } from 'motion/react'
import { useMemo } from 'react'

// ─── PageTitle (wrapper) ────────────────────────────────────────────────────

interface PageTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageTitle = React.forwardRef<HTMLDivElement, PageTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex flex-col items-center justify-center text-center overflow-hidden select-none [container-type:inline-size]',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
PageTitle.displayName = 'PageTitle'

// ─── PageTitleBg (háttér halvány nagy szöveg) ───────────────────────────────

interface PageTitleBgProps extends HTMLMotionProps<'span'> {}

const PageTitleBg = React.forwardRef<HTMLSpanElement, PageTitleBgProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.span
        ref={ref}
        aria-hidden="true"
        className={cn(
          'hidden sm:flex', // Kisebb képernyőkön elrejtve, hogy ne zavarja a tartalmat
          // Teljes szélességre skálázott háttér szöveg
          'absolute inset-0 flex items-center justify-center',
          'font-black uppercase leading-none tracking-tighter',
          // container-inline mérethez igazodik, sosem lóg ki
          '[font-size:clamp(2.5rem,15cqi,12rem)]',
          'overflow-hidden',
          // Ne interferáljon a kattintással
          'pointer-events-none whitespace-nowrap',
          className,
        )}
        {...props}
      >
        {children}
      </motion.span>
    )
  },
)
PageTitleBg.displayName = 'PageTitleBg'

// ─── PageTitleHeading (fő cím) ──────────────────────────────────────────────

interface PageTitleHeadingProps extends HTMLMotionProps<'h1'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const PageTitleHeading = React.forwardRef<
  HTMLHeadingElement,
  PageTitleHeadingProps
>(({ className, as: Tag = 'h1', children, ...props }, ref) => {
  const MotionTag = useMemo(() => motion.create(Tag), [Tag])

  return (
    <MotionTag
      ref={ref}
      className={cn(
        'relative z-10',
        'font-bold tracking-tight leading-tight',
        'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
        'text-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </MotionTag>
  )
})
PageTitleHeading.displayName = 'PageTitleHeading'

// ─── PageTitleSubtitle ──────────────────────────────────────────────────────

interface PageTitleSubtitleProps extends HTMLMotionProps<'p'> {}

const PageTitleSubtitle = React.forwardRef<
  HTMLParagraphElement,
  PageTitleSubtitleProps
>(({ className, children, ...props }, ref) => {
  return (
    <motion.p
      ref={ref}
      className={cn(
        'relative z-10 mt-3',
        'text-base sm:text-lg md:text-xl',
        'text-muted-foreground',
        'max-w-2xl',
        'font-normal leading-relaxed',
        className,
      )}
      {...props}
    >
      {children}
    </motion.p>
  )
})
PageTitleSubtitle.displayName = 'PageTitleSubtitle'

// ─── PageTitleBadge (opcionális kis pill/badge a cím fölé) ──────────────────

interface PageTitleBadgeProps extends HTMLMotionProps<'span'> {}

const PageTitleBadge = React.forwardRef<HTMLSpanElement, PageTitleBadgeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.span
        ref={ref}
        className={cn(
          'relative z-10 mb-4 inline-flex items-center gap-1.5',
          'rounded-full px-3 py-1',
          'text-xs font-medium uppercase tracking-widest text-muted-foreground',
          className,
        )}
        {...props}
      >
        {children}
      </motion.span>
    )
  },
)
PageTitleBadge.displayName = 'PageTitleBadge'

// ─── PageTitleDivider (opcionális dekoratív elválasztó) ─────────────────────

interface PageTitleDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageTitleDivider = React.forwardRef<
  HTMLDivElement,
  PageTitleDividerProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative z-10 mt-6',
        'h-px w-24',
        'bg-linear-to-r from-transparent via-accent-2 to-transparent',
        className,
      )}
      {...props}
    />
  )
})
PageTitleDivider.displayName = 'PageTitleDivider'

// ─── PageTitleButtonContainer (konténer egyedi gombok számára) ───────────────

interface PageTitleButtonContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
}

const PageTitleButtonContainer = React.forwardRef<
  HTMLDivElement,
  PageTitleButtonContainerProps
>(({ className, children, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn('relative z-10 mt-6 flex items-center gap-3', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
})
PageTitleButtonContainer.displayName = 'PageTitleButtonContainer'

// ─── Exports ────────────────────────────────────────────────────────────────

export {
  PageTitle,
  PageTitleBg,
  PageTitleHeading,
  PageTitleSubtitle,
  PageTitleBadge,
  PageTitleDivider,
  PageTitleButtonContainer,
}
