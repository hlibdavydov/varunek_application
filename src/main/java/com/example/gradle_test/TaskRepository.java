package com.example.gradle_test;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Long> {
  Task findByTitle(String title);
  List<Task> findAllByEnabledOrderByPriorityAsc(boolean isEnabled);
  List<Task> findAllByEnabled(boolean isEnabled);
}
