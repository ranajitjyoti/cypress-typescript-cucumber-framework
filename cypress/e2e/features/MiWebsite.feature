@mi
Feature: Mi India website testing

  Background:
    Given I go to the Mi India website
    And I should see the Mi India page title

  @smoke
  Scenario: Search for Redmi phone
    Given I search for "Redmi" product
    When I click on the first product
    Then I should see the product details for "Redmi"
    And the product image should be visible

  @smoke
  Scenario: Search for Redmi Note 15 phone
    Given I search for "Redmi Note 15" product
    When I click on the first product
    Then I should see the product details for "Redmi Note 15"
      @smoke
  Scenario: Search for Redmi Note 15 Pro phone
    Given I search for "Redmi Note 15 Pro" product
    When I click on the first product
    Then I should see the product details for "Redmi Note 15 Pro"

    Examples:
      | product |
      | Mi Band |
      | Xiaomi  |
    
