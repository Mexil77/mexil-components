import styles from './button.module.scss';
export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, ...restProps } = props;
  return (
    <button className={`${className} ${styles.MXButton}`} {...restProps} />
  );
}
