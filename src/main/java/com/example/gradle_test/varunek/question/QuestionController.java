package com.example.gradle_test.varunek.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
@RequestMapping(path = "question")
public class QuestionController {

  private final QuestionRepository repository;

  @Autowired
  public QuestionController(QuestionRepository repository) {
    this.repository = repository;
  }

  @GetMapping
  public List<Question> getQuestions() {
    final var questions = repository.findAll();
    return questions;
  }

  @GetMapping(path = "{id}")
  public EntityModel<Question> getQuestionById(@PathVariable Long id) {
    final Question question = repository
            .findById(id)
            .orElseThrow(() -> new RuntimeException());
    return EntityModel.of(
            question,
            linkTo(methodOn(QuestionController.class).getQuestionById(id)).withSelfRel(),
            linkTo(methodOn(QuestionController.class).getQuestions()).withRel("question"));
  }

}
