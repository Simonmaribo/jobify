import { FaArrowUp } from 'react-icons/fa';
import { useWindowScroll } from '@mantine/hooks';
import { ActionIcon, Affix, Transition } from '@mantine/core';

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 24, right: 24}}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(styles) => (
            <ActionIcon
                size="xl"
                variant='filled'
                onClick={() => scrollTo({y: 0})}
                styles={styles}
                color={(theme) => theme.colors.primary}
            >
                <FaArrowUp 
                    style={{ width: 25, height: 25}}
                />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
}