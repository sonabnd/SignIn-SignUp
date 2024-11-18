interface ButtonComponentProps {
  children: string;
  className?: string;
  htmlType?: 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
