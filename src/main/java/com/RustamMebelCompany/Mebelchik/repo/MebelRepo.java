package com.RustamMebelCompany.Mebelchik.repo;

import com.RustamMebelCompany.Mebelchik.entity.Mebel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MebelRepo extends JpaRepository<Mebel, Long> {

}
