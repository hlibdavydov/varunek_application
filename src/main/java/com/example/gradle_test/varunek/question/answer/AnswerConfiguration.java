package com.example.gradle_test.varunek.question.answer;

import com.example.gradle_test.varunek.question.QuestionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AnswerConfiguration {
@Bean
  public CommandLineRunner configureAnswers(AnswerRepository repository){
  return args -> {

  };
}
}
