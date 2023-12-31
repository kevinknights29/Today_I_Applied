import React, {useState} from 'react';
import JobDetails from '../JobDetails/JobDetails';
import ReactionButton from '../ReactionButton/ReactionButton';
import CommentBox from '../CommentBox/CommentBox';
import CommentView from '../CommentView/CommentView';
import useFetchReactions from '../../hooks/useFetchReactions';
import PropTypes from 'prop-types';

const ListingCard = ({job}) => {
  const {
    id,
    role: roleName,
    company: companyName,
    url: applicationUrl,
    location,
    tags,
  } = job;
  const {reactions, loading, error} = useFetchReactions(id);
  const applications = 0;
  const [show, setShow] = useState(false);

  const openLink = (link) => {
    window.open(link, '_blank');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching reactions: {error}</div>;

  return (
    <div className="listing-container">
      <div className="listing">
        <JobDetails
          roleName={roleName}
          companyName={companyName}
          location={location}
        />
        <div className="application">
          <button onClick={() => openLink(applicationUrl)}>Apply</button>
        </div>
        <div className="tags">
          <span>#{tags[0]}#</span>
        </div>
        <div className="reactions">
          <ReactionButton
            jobId={id}
            type="like"
            emoji="👍"
            count={reactions.likes}
          />
          <ReactionButton
            jobId={id}
            type="red_flag"
            emoji="🚩"
            count={reactions.redFlags}
          />
          <button>✅ {applications}</button>
          <button onClick={() => setShow(!show)}>
            💬 {reactions.comments}
          </button>
        </div>
      </div>
      {show ? (
        <div>
          <div>
            <CommentView jobID={id} />
          </div>
          <div className="comments">
            <CommentBox jobID={id} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

ListingCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default React.memo(ListingCard);
