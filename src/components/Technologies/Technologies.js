import React from 'react';
import { DiPython, DiMootoolsBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='text'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      There are many technoligies
    </SectionText>
    <List>
      <ListItem>
        <DiMootoolsBadge size='3rem' />
        <ListContainer>
          <ListTitle>CAD Softwares</ListTitle>
          <ListParagraph>
            Experience with <br />
            NX <br />
            SolidWorks
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMootoolsBadge size='3rem' />
        <ListContainer>
          <ListTitle>CAE Softwares</ListTitle>
          <ListParagraph>
            Experience with <br />
            ANSA <br />
            META
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size='3rem' />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python <br />
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
