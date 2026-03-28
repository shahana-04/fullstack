package com.example.emp.controller;

import com.example.emp.model.Expense;
import com.example.emp.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expenses")
@CrossOrigin("*")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping
    public Expense createExpense(@RequestBody Expense expense) {
        return expenseService.createExpense(expense);
    }

    @GetMapping("/my/{userId}")
    public List<Expense> getMyExpenses(@PathVariable Long userId) {
        return expenseService.getMyExpenses(userId);
    }

    @GetMapping("/all")
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @PutMapping("/{id}/approve")
    public Expense approveExpense(@PathVariable Long id) {
        return expenseService.approveExpense(id);
    }

    @PutMapping("/{id}/reject")
    public Expense rejectExpense(@PathVariable Long id) {
        return expenseService.rejectExpense(id);
    }
}



