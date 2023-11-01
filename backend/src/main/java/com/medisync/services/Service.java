package com.medisync.services;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;

import com.medisync.interfaces.ServiceInterface;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.RDFNode;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@org.springframework.stereotype.Service
public class Service implements ServiceInterface {
	
public String query(String nom, String querry) {
	String fusekiQueryEndpoint = "http://localhost:3030/Hospital/query";
	 
    String queryFilePath = "data/"+nom+"/"+querry+".txt";

    try (BufferedReader reader = new BufferedReader(new FileReader(queryFilePath))) {
        String line;
        StringBuilder queryBuilder = new StringBuilder();

        while ((line = reader.readLine()) != null) {
            queryBuilder.append(line).append("\n");
        }

        String sparqlQuery = queryBuilder.toString();

        // Create a SPARQL query
        Query query = QueryFactory.create(sparqlQuery);

        // Execute the query on the Fuseki dataset
        try (QueryExecution qexec = QueryExecutionFactory.sparqlService(fusekiQueryEndpoint, query)) {
            ResultSet results = qexec.execSelect();

            // Convert the results to a JSON array
            JsonArray jsonArray = new JsonArray();

            while (results.hasNext()) {
                QuerySolution solution = results.nextSolution();
                JsonObject jsonObject = new JsonObject();

                // Dynamically generate JSON based on query variables
                Iterator<String> varNames = solution.varNames();
                while (varNames.hasNext()) {
                    String varName = varNames.next();
                    RDFNode value = solution.get(varName);
                    jsonObject.addProperty(varName, value.toString());
                }

                jsonArray.add(jsonObject);
            }

            // Print the JSON results
            return(jsonArray.toString());
        }
    } catch (IOException e) {
        return(e.toString());
    }
}

}
