package com.example.gradle_test.varunek.question.answer;

import com.example.gradle_test.varunek.question.Question;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Answer {
  @Id
  @GeneratedValue
  private Long id;
  private String text;
  private boolean isCorrect;
  @ManyToOne
  @JsonIgnore
  private Question question;

  public Answer() {}

  public Answer(String text, boolean isCorrect, Question question) {
    this.text = text;
    this.isCorrect = isCorrect;
    this.question = question;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public boolean isCorrect() {
    return isCorrect;
  }

  public void setCorrect(boolean correct) {
    isCorrect = correct;
  }

  public Question getQuestion() {
    return question;
  }

  public void setQuestion(Question question) {
    this.question = question;
  }
}
