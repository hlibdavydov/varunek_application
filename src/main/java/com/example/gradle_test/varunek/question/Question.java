package com.example.gradle_test.varunek.question;

import com.example.gradle_test.varunek.question.answer.Answer;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity(name = "question")
public class Question {

  @Id
  @GeneratedValue
  Long id;
  private String text;
  @OneToMany(mappedBy = "question", cascade = { CascadeType.ALL })
  private Set<Answer> answers;

  public Question() { }

  public Question(String text, Set<Answer> answers) {
    this.text = text;
    this.answers = answers;
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

  public Set<Answer> getAnswers() {
    return answers;
  }

  public void setAnswers(Set<Answer> answers) {
    this.answers = answers;
  }
}
