import InfoRow from "./InfoRow";
import CV from "./CV";
import './PageContent.scss'
function PageContent() {
  return (
        <div className='page-content'>
            <InfoRow/>
            <CV/>
        </div>
  );
}

export default PageContent;