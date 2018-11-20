import PropTypes from 'prop-types';

export const userPropType = PropTypes.shape({
    id: PropTypes.number,
    nick_name: PropTypes.string,
    profile_pic: PropTypes.string,
    ranking: PropTypes.number,
    points: PropTypes.number
});
