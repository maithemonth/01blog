package com._blog.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com._blog.demo.model.Entity.Reaction;

public interface ReactionRepo extends JpaRepository<Reaction,Integer>{
    
}
