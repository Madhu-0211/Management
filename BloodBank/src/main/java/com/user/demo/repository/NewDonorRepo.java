package com.user.demo.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.user.demo.model.NewdonorModel;
@Repository
public interface NewDonorRepo extends JpaRepository<NewdonorModel,Integer> {
       List<NewdonorModel> findByBloodgroup(String bloodgroup);
       List<NewdonorModel> findByStatus(int id);
       
       @Modifying
       @Query(value="DELETE FROM donordetails WHERE date<now() - interval 90 DAY",nativeQuery=true)
       void deleteAfter90days(); 
       
}
