package com.dubhacks.fishtouching.meetingfinder;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//
//public interface TimeArrangeRepository extends JpaRepository<User, String>{
//	Optional<User> findByUid(String Uid);
//}

import org.springframework.data.repository.CrudRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

@Repository
public class UserRepository {
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
 
    @Transactional(readOnly=true)
    public List<User> findAll() {
        return jdbcTemplate.query("select * from users", new UserRowMapper());
    }
}