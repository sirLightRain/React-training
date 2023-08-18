import { styled } from 'styled-components';

const getBorderColor = props => {
  console.log(props);
  switch (props.level) {
    case 'beginner':
      return props.theme.colors.green;
    case 'intermediate':
      return props.theme.colors.orange;
    case 'advanced':
      return props.theme.colors.red;
    default:
      return null;
  }
};

export const Wrapper = styled.div`
  padding: 8px;
  border: 5px solid ${getBorderColor};
  border-radius: 4px;
`;

export const Topic = styled.h2`
  margin-top: 0px;
  margin-bottom: 12px;
`;

export const MetaWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Text = styled.p`
  margin: 0px;

  color: ${props => {
    return props.color;
  }};
`;
