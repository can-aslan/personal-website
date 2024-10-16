import styles from './Title.module.css';
import { Text } from '@mantine/core';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <>
      <Text className={styles.title}>{text}</Text>
    </>
  );
};

export default Title;
