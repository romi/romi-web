<template>
  <div class="rich-text">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="postcss">
.rich-text {
  @apply max-w-[50em];

  & > * + * { margin-top: 1em; }

  & :is(ol, ul) {
    counter-reset: list-counter;

    & > li {
      counter-increment: list-counter;
      @apply relative pl-9;
      & :matches(+ li, > :matches(ol, ul)) { margin-top: 0.6em; }
    }

    &:not(ul) > li::before {
      content: counter(list-counter) '.';
      @apply absolute left-0 transform scale-75 origin-left;
    }

    &:not(ol) > li::before {
      content: '\25CB \FE0E';
      content: '\25CF \FE0E';
      @apply absolute left-1 transform scale-50 origin-left;
    }

    /* & :matches(ul, ol) {
      & :matches(ul, ol) ol {
        list-style-type: lower-alpha;
      }
    }

    & > div > :matches(ul, ol) {
      counter-reset: item;

      & > li {
        counter-increment: item;

        & > ol {
          list-style-type: none;
          counter-reset: item;

          & > li {
            counter-increment: item;
            @apply table;

            &::before {
              content: counters(item, '.') '. ';
              font-variant-numeric: tabular-nums;
              @apply table-cell;
            }
          }
        }
      }
    } */
  }
}
</style>
