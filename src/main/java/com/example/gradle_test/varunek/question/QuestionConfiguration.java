package com.example.gradle_test.varunek.question;

import com.example.gradle_test.varunek.question.answer.Answer;
import com.example.gradle_test.varunek.question.answer.AnswerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Set;

@Configuration
public class QuestionConfiguration {

  @Bean
  public CommandLineRunner questionRunner(QuestionRepository repository, AnswerRepository answerRepository) {
    return args -> {
      var question = new Question();
      final Question saveQuestion = repository.save(question);
      var answers = Set.of(new Answer("Yes", false, saveQuestion), new Answer("No", true, saveQuestion));
      final List<Answer> savedAnswers = answerRepository.saveAll(answers);
      saveQuestion.setText("Is Stefan nice?");
      saveQuestion.setAnswers(Set.copyOf(savedAnswers));
      repository.save(saveQuestion);
    };
  }
}
