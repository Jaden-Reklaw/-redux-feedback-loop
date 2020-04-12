-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE feedback (
  id serial primary key,
  feeling INT not null,
  feel_comment text,
  understanding INT not null,
  understand_comment text,
  support INT not null,
  support_comment text,
  thank_comment text,
  proud_comment text,
  last_comment text,
  flagged boolean default false,
  date date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO feedback (feeling, feel_comment, understanding, understand_comment, support, support_comment, thank_comment, proud_comment, last_comment)
VALUES (4, 'I feel great', 4, 'I undertand the subject', 5, 'I feel supported', 'I like to thank the cohort', 'Getting homework done', 'Prime is awesome');
