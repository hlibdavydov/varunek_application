package com.example.gradle_test;

import com.example.gradle_test.Controllers.StudentRepository;
import com.example.gradle_test.Models.Student;
import lombok.val;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
@RestController
public class GradleTestApplication {

  public static void main(String[] args) {
    SpringApplication.run(GradleTestApplication.class, args);
  }
  @Bean
  public CommandLineRunner runApplication(StudentRepository taskRepository) {
    return (args -> {

    });
  }

}
