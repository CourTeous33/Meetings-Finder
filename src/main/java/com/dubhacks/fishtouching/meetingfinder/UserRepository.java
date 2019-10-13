package com.dubhacks.fishtouching.meetingfinder;

//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//
//public interface TimeArrangeRepository extends JpaRepository<User, String>{
//	Optional<User> findByUid(String Uid);
//}

import org.springframework.data.repository.CrudRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, String> {

}