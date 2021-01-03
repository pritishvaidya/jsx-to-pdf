import { useJsxToPdf } from './index';

function JsxToPdf(props) {
  const { children } = props;
  const {
    jsxRef, loading, error, errorText, convertToPdf,
  } = useJsxToPdf(props);

  return children({
    save: convertToPdf, jsxRef, loading, error, errorText,
  });
}

JsxToPdf.defaultProps = {
  name: 'jsxToPdf',
  scale: 1,
  x: 0,
  y: 0,
  domToImageOptions: {},
};

export default JsxToPdf;
