import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={306}
    height={530}
    viewBox="0 0 293 495"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="153" cy="175" r="120" /> 
    <rect x="65" y="329" rx="5" ry="5" width="170" height="24" /> 
    <rect x="13" y="363" rx="5" ry="5" width="272" height="77" /> 
    <rect x="13" y="454" rx="5" ry="5" width="88" height="27" /> 
    <rect x="126" y="447" rx="20" ry="20" width="157" height="41" />
  </ContentLoader>
)

export default Skeleton;