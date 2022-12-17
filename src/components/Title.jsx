export const Title = ({ text, Heading = 'h2', id = undefined }) => {
  let headingProps = {};

  if (id) {
    headingProps = { ...headingProps, id };
  }

  return (<Heading {...headingProps}>{text}</Heading>);
};
