import React from 'react';
import supabase from '../../client/supabaseClient';
import {getCurrentUserId} from '../../client/supabaseAuth';

const ReactionButton = ({jobId, emoji, count, type}) => {
  const handleReaction = async () => {
    // Get Authenticated User ID
    const userID = await getCurrentUserId();

    const {data: reaction, error} = await supabase
        .from('reactions')
        .select('id')
        .eq('job_id', jobId)
        .eq('user_id', userID);
    console.log('Retrieved reaction:', reaction);

    if (error) {
      console.error(error);
    } else if (reaction.length === 0) {
      const {data: row, error} = await supabase
          .from('reactions')
          .insert({job_id: jobId, user_id: userID, type}, {upsert: true});
      if (error) {
        console.error(error);
      } else {
        console.log('Insert reaction successfully:', row);
      }
    } else {
      const {data: row, error} = await supabase
          .from('reactions')
          .update({type})
          .eq('id', reaction[0].id)
          .select();
      if (error) {
        console.error(error);
      } else {
        console.log('Update reaction successfully:', row);
      }
    }
  };

  return (
    <button onClick={handleReaction}>
      {emoji} {count}
    </button>
  );
};

export default ReactionButton;
